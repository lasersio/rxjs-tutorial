export interface Observer {
	update : (value : string) => void;
}

export class Subject {

	observers : Observer[] = [];

	addObserver(observer : Observer)
	{
		this.observers.push(observer);
	}

	removeObserver(observer : Observer)
	{
		const index = this.observers.indexOf(observer);
		if (index !== -1) this.observers.splice(index, 1);
	}

	notify(value : string)
	{
		this.observers.forEach(observer => observer.update(value));
	}
}

const subj = new Subject();
const obs1 : Observer = {update : value => console.log('obs1: ' + value)};
const obs2 : Observer = {update : value => console.log('obs2: ' + value)};

subj.addObserver(obs1);
subj.addObserver(obs2);
subj.notify('First event for both');
subj.notify('Second event for both');

subj.removeObserver(obs1);
console.log('\nobs1 removed');
subj.notify('Third event only for one');
