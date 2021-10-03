# music-player
# ------------------------------------------------
# 

.PHONY: help clear start open update-dependencies test shell stop


help: Makefile
	@sed -n 's/^# //p' $<

start:
	@docker-compose up -d


# > open:   open app in browser
open: | start
	open http://localhost:3000

# > test:   run test suite
test: | start
	docker-compose exec app npm test

# > stop:   stop app
stop:
	docker-compose down

# 
# > clear:  clear .eslintcache
clear:
	find . -type f -name ".eslintcache" -delete

# > update: update dependencies to latest
update:
	npm install && npm audit fix --force

# > shell:  open app container shell
shell: | start
	docker-compose exec app sh
