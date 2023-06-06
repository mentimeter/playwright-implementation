# playwright-implementation

This is an example of how we like to set up a playwright project at Mentimeter.

Some notable features we like to use:

- Usage `global-setup.ts` and `global-teardown.ts`
- Page Object Models in `pages` for storing locators across tests
- A `lib` folder with common functionality for calling backend APIs
- The default `test` function extended with project-specific functionality in `test.ts`
- Pretty imports using typescript `paths`
