import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import "./index.css"

import configureStore from "./store/store"
import { completeTask, getTasks, taskDeleted, titleChanged } from "./store/task"

const store = configureStore()

const App = () => {
	const [state, setState] = useState(store.getState())

	useEffect(() => {
		store.dispatch(getTasks())

		store.subscribe(() => {
			setState(store.getState())
		})
	}, [])

	const changeTitle = (taskId) => {
		store.dispatch(titleChanged(taskId))
	}
	const deleteTask = (taskId) => {
		store.dispatch(taskDeleted(taskId))
	}

	return (
		<>
			<h1>App</h1>
			<ul>
				{state.map((el) => (
					<li key={el.id}>
						<p>{el.title}</p>
						<p>{`Completed: ${el.complited}`}</p>
						<button onClick={() => store.dispatch(completeTask(el.id))}>Complete</button>
						<button onClick={() => changeTitle(el.id)}>Change title</button>
						<button onClick={() => deleteTask(el.id)}>Delete title</button>
						<hr />
					</li>
				))}
			</ul>
		</>
	)
}
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
