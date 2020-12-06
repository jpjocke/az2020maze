# az2020maze
"Arbetsprov"

## How to run
This is started by expo right now. 
- npm install (first time)
- npm run start 

Will start the project.

As I am not familiar with react-native per se I have kept it as an expo project. The documentation state that it can easily be ejected from expo if one wished to.

# Time limitation
I am currently on parental leave. Caring for my son does not give me much time to work on this. The time spent is also done in short bursts, 5 min here 20 min there.

## Things to improve
### network/cache
Should be a database for offline cached content. Timeout could probably be quite high(delete after a few days) as the data is not expected to change much.

### Tests
More tests, 100% code coverage would be preferred.

### Styling
I would have added a third party styling library, like Styled components.

# Questions
- Nice to have features: Endless or pagination.
-- The Maze API does not support paging, so how should this be done?