.PHONY: all build help

all: build ## Main task for local dev
	python3 -m http.server

build: ## Bunbles and minifies the project
	bun script/bundle.ts

help: ## Show this help
	@grep -Eh '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

