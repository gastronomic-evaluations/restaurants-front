dev:
	docker-compose up -d restaurants-front
down:
	docker-compose stop restaurants-front
	docker-compose rm restaurants-front
logs:
	docker-compose logs -f restaurants-front
restart:
	docker-compose restart restaurants-front