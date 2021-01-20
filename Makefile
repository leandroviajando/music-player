.PHONY: clear start open update-dependencies test shell stop

clear:
	find . -type f -name ".eslintcache" -delete

start:
	docker-compose up -d

open: | start
	open http://localhost:3000

update-dependencies: | start
	docker-compose exec app npm install

test: | start
	docker-compose exec app npm test

shell: | start
	docker-compose exec app sh

stop:
	docker-compose down
