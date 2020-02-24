import (
	"github.com/Harmony-Technology/PUGD-api/graphql/types"
	"github.com/graphql-go/graphql"
	"net/http"
)

var createBook = &graphql.Field{
	Type: types.BookType, // the return type for this field
	Args: graphql.FieldConfigArgument{
		"title": &graphql.ArgumentConfig{
			Type: graphql.NewNonNull(graphql.String),
		},
	},
	Resolve: func(params graphql.ResolveParams) interface{} {

		// marshall and cast the argument value
		text, _ := params.Args["text"].(string)

		// perform mutation operation here
		// for e.g. create a Todo and save to DB.
		newTodo := &Todo{
			ID:   "id0001",
			Text: text,
			Done: false,
		}

		// return the new Todo object that we supposedly save to DB
		// Note here that
		// - we are returning a `Todo` struct instance here
		// - we previously specified the return Type to be `todoType`
		// - `Todo` struct maps to `todoType`, as defined in `todoType` ObjectConfig`
		return newTodo
	},
},