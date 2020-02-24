# GraphQL
> http://graphql.yoga/

GraphQl의 장점 Under/over fetching를 막을 수 있음
yarn add graphql-yoga
yarn gloabl add nodemon(서버 재시작 툴)

# 정의
> 아래 2개의 파일이 정의되어있어야 실행이됨
const server = new GraphQLServer({
    typeDefs:"graphql/schema.graphql",
    resolvers
});
## graphql/schema.graphql
> graphql의 query를 설명해주는 파일

## graphql/resolvers.js
> resolvers를 설정하는 파일

## Query/Mutation
> Query(R)
    Read Only
> Mutation(CUD)
    Create
    Update
    Delete