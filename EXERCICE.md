Bienvenue !

Pour cet exercice, nous allons vous accompagner dans le développement de vos premières actions. Il s’agit de la première des trois étapes vers une architecture Redux suivant les best practices !

1. Créez vos premiers `Action Types`

Dans le fichier `/src/constants/ActionTypes.js`, créez les types :
- ADD_TODO
- DELETE_TODO
- EDIT_TODO
- COMPLETE_TODO
- COMPLETE_ALL_TODOS
- CLEAR_COMPLETED
- SET_VISIBILITY_FILTER

En suivant l'exemple suivant :
```javascript
export const MY_ACTION_TYPE = 'MY_ACTION_TYPE'
```

2. Préparez vos actions pour la todo

Dans le fichier `/src/actions/index.js`, importez le fichier `ActionTypes.js` afin de pouvoir les appeler en utilisant la variable `types`.

Exemple d'import :
```javascript
import * as utils from './utils'
```

3. Créez vos action creators `addTodo`, `editTodo` et `setVisibilityFilter`

Dans le fichier `/src/actions/index.js`, créez les action creators :
- `addTodo` ayant pour paramètre `text`.
- `editTodo` ayant pour paramètre `id` et `text`.
- `setVisibilityFilter` ayant pour paramètre `filter`.

**N’oubliez pas :** le paramètre `type` et sa valeur sont obligatoires pour chaque action creator !

Exemple d'action creator :
```javascript
export const deleteTodo = (id) => ({
	type: types.DELETE_TODO,
	id,
})
```