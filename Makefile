# THANK YOU: https://gist.github.com/mpneuried/0594963ad38e68917ef189b4e6a269db

# import env
cnf ?= ./server/.env
include $(cnf)
export $(shell sed 's/=.*//' $(cnf))

# grep the version from the mix file
VERSION=$(shell ./version.sh)

# DOCKER TASKS

# Build the container
# build: ## Build the release and develoment container. The development
# 	docker-compose build --no-cache $(APP_NAME)
# 	docker-compose run $(APP_NAME) grunt build
# 	docker build -t $(APP_NAME) .

# run: stop ## Run container on port configured in `config.env`
# 	docker run -i -t --rm --env-file=./server/.env -p=$(PORT):$(PORT) --name="$(APP_NAME)" $(APP_NAME)


# dev: ## Run container in development mode
# 	docker-compose build --no-cache $(APP_NAME) && docker-compose up $(APP_NAME)

# # Build and run the container
# up: ## Spin up the project
# 	docker-compose up --build $(APP_NAME)

# stop: ## Stop running containers
# 	docker stop $(APP_NAME)

# rm: stop ## Stop and remove running containers
# 	docker rm $(APP_NAME)

# # Docker release - build, tag and push the container
# release: build publish ## Make a release by building and publishing the `{version}` ans `latest` tagged containers to ECR

# # Docker publish
# publish: repo-login publish-latest publish-version ## publish the `{version}` ans `latest` tagged containers to ECR

# publish-latest: tag-latest ## publish the `latest` taged container to ECR
# 	@echo 'publish latest to $(DOCKER_REPO)'
# 	docker push $(DOCKER_REPO)/$(APP_NAME):latest

# publish-version: tag-version ## publish the `{version}` taged container to ECR
# 	@echo 'publish $(VERSION) to $(DOCKER_REPO)'
# 	docker push $(DOCKER_REPO)/$(APP_NAME):$(VERSION)

# # Docker tagging
# tag: tag-latest tag-version ## Generate container tags for the `{version}` ans `latest` tags

# tag-latest: ## Generate container `{version}` tag
# 	@echo 'create tag latest'
# 	docker tag $(APP_NAME) $(DOCKER_REPO)/$(APP_NAME):latest

# tag-version: ## Generate container `latest` tag
# 	@echo 'create tag $(VERSION)'
# 	docker tag $(APP_NAME) $(DOCKER_REPO)/$(APP_NAME):$(VERSION)

# HELPERS

# generate script to login to aws docker repo
# CMD_REPOLOGIN := "aws ecr"
# ifdef AWS_CLI_PROFILE
# CMD_REPOLOGIN += "--profile $(AWS_CLI_PROFILE)"
# endif
# ifdef AWS_CLI_REGION
# CMD_REPOLOGIN += "--region $(AWS_CLI_REGION)"
# endif
# CMD_REPOLOGIN += "get-login --no-include-email"

# repo-login: ## Auto login to AWS-ECR unsing aws-cli
# 	@eval $(CMD_REPOLOGIN)

# version: ## output to version
# 	@echo $(VERSION)
