import React from 'react';

class App extends React.Component {
	state = {
		todos: [ { title: 'Learn to code', done: true }, { title: 'Rule the world', done: false } ],
		inputValue: ''
	};

	handleClick = () => {
		let copyTodo = [ ...this.state.todos ];

		copyTodo.push({ title: this.state.inputValue, done: false });

		this.setState({ todos: copyTodo });
	};

	render = () => {
		return (
			<div className="mycontainer">
				<h1>To-Do list </h1>
				{this.state.todos.map((el, index) => {
					return (
						<span
							className={el.done === true ? 'selected' : ''}
							key={index}
							onClick={() => {
								!{ done };
							}}
						>
							{el.title}
						</span>
					);
				})}

				<input
					placeholder="Titre"
					onChange={(event) => {
						this.setState({ inputValue: event.target.value });
					}}
				/>
				<br />
				<button
					onClick={(event) => {
						this.handleClick();
					}}
				>
					AJOUTER UNE TACHE
				</button>
			</div>
		);
	};
}
export default App;
