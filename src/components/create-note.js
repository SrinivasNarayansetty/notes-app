import React from 'react';
import '../styles/create-note.css'

class CreateNote extends React.Component{
    constructor(props) {
        super(props);
        this.submitData = this.submitData.bind(this);
    }

    submitData() {
        console.log('submitting');
    }

    render() {
        return (
            <>
                Test Form
                <button onClick={this.submitData}>Submit</button>
            </>
        )
    }
}

export default CreateNote;