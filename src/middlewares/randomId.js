export default store => next => action => {  

	const { index, ...rest } = action;

	if (index !== 'create') {
		return next(action);
	  }

	let indexRandom ='' 
	const abd ='abcdefghijklmnopqrstuvwxyz0123456789'
	while(indexRandom.length < 10) {
		indexRandom += abd[Math.random() * abd.length|0]
	}
	return next({ ...rest, index: indexRandom })
  } 