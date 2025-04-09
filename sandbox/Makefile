.PHONY: all build clean install_dependencies statistics test todo help

all: build ## Main task for local dev
	python3 -m http.server

build: src-img/tilemap.ts test ## Bunbles and minifies the project
	bun script/bundle.ts

clean: ## Cleans all artifacts
	rm -rf build/
	rm src-img/tilemap.ts

src-img/tilemap.ts: src-img/*.txt src-img/_create-images.sh ## Creates tilemap from src-img
	mkdir -p build/
	cd src-img/ && bash _create-images.sh

install_dependencies: ## Install dependencies
	bun install -d bun-types
	bun add @types/web -D
	PIPENV_PIPFILE=src-img/Pipfile pipenv install

statistics: ## Print project statistics
	@bun script/project_statistics.ts
	@echo ''
	@echo '## Artifacts, Docs and Code'
	@echo ''
	@echo -n '* Web build size (Bytes): '
	@du -bch ./build/ index.html | grep total | awk '{print $$1;}'
	@echo -n '* TypeScript LOC: '
	@wc -l src/*.ts | tail -1 | awk '{print $$1}'
	@echo -n '* Design/project management document size in lines: '
	@cat ../../BACKLOG.md | wc -l
	@echo -n '* TODO count in the codebase: '
	@grep -rin "todo" src/ test/ | wc -l
	@git log --pretty='format:%cd' --date=format:'%Y' | uniq -c | awk '{print "* "$$2" commit count: "$$1}'

test: ## Execute tests
	bun test --coverage

todo: ## List all todos
	@grep -rin "todo" src/ test/

help: ## Show this help
	@grep -Eh '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
