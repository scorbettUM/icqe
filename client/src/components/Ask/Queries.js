import gql from 'graphql-tag'

const QuestionMutation = gql`
  mutation submitQuestion($query: String!){
    submitQuestion(query: $query){
      response{
        questionid
        userid
        answerid
        body
        similarity
        linkto
      }
      responseTime
      responseLength
    }
  }
`

const AddNewQuestionMutation = gql`
  mutation AddNewQuestion($body: String!, $userid: ID!, $answerid: ID!){
    AddNewQuestion{
      Question(Body: $body, UserId: $userid, AnswerId: $answerid){
        Body
        UserId
        QuestionId
      }
    }
  }
`

const AddNewTagsMutation = gql`
  mutation AddNewTags($tags: [String]!, $questionid: ID!, $userid: ID!){
    AddNewTags{
      Tags(Tags: $tags, QuestionId: $questionid, UserId: $userid){
        TagId
        Body
      }
    }
  }
`

// const AddUser = gql`
//   query
// `

export {QuestionMutation, AddNewQuestionMutation, AddNewTagsMutation}