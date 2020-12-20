clear:
	find . -type f -name ".eslintcache" -delete

start:
	docker-compose up -d

run: start
	sleep 3
	open http://localhost:3000

install: start
	docker-compose exec app npm install

test: start
	docker-compose exec app npm test

shell: start
	docker-compose exec app sh

stop:
	docker-compose down
