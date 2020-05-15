import React, {Component} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
    constructor() {
        super();

        this.state = {
            people: [
                {
                    name: "Veronica Mize",
                    dob: "11/29/2011"
                }, {
                    name: "Cecilia Olsson",
                    dob: "09/16/1992"
                }, {
                    name: "Peter Parker",
                    dob: "01/16/1992"
                }, {
                    name: "Jimmy Shergil",
                    dob: "12/12/2001"
                }, {
                    name: "Alexander Alfred",
                    dob: "02/09/1891"
                }, {
                    name: "Janice Shroyer",
                    dob: "12/01/1982"
                }, {
                    name: "Ralph White",
                    dob: "11/30/2011"
                }, {
                    name: "Deborah T. Decker",
                    dob: "10/31/1999"
                }
            ]
        }
    }

    sort = (e, field) => {
        const sortedPeople = [...this.state.people];
        sortedPeople.sort((a, b) => {
            const {checked} = e.target;
            const {a_FieldValue, b_FieldValue} = this.getFields(a, b, field);
            return this.sortFunc(a_FieldValue, b_FieldValue, checked ? 'asc' : 'desc')
        });
        this.setState({people: sortedPeople});
    };


    sortFunc = (a, b, order) => {
        if(a < b) { return order === 'asc' ? -1 : 1 }
        if(a > b) { return order === 'asc' ? 1 : -1; }
        return 0;
    };

    getFields = (a, b, fieldName) => {
        let a_FieldValue = a[fieldName];
        let b_FieldValue = b[fieldName];
        if(fieldName === 'dob') {
            a_FieldValue = new Date(a[fieldName]);
            b_FieldValue = new Date(b[fieldName]);
        }
        return {a_FieldValue, b_FieldValue}
    };

    render() {
        return (
            <div className="container-fluid">
                <center><h1>Birthday Records</h1></center>
                <Filter sort={this.sort}/>
                <RecordTable people={this.state.people}/>
            </div>
        );
    }
}

export default App;
