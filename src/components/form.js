import React, { Component } from 'react'

export class form extends Component {
    state ={
        city: "Abeokuta",
        country: "nigeria"
    }

    handleChange = (e)=>{
        this.setState({
          [ e.target.name]: e.target.value 
        })
    
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.fetchData(this.state)
    }
    render() {
        return (
            <div>
                <form className='form-group ' onSubmit={this.handleSubmit}>
                    <div className="row justify-content-center">
                        <div className="col-md-3 py-3" >
                            <input placeholder="City" name="city" className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="col-md-3 py-3">
                            <input placeholder="Country" name="country" className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="col-md-3 py-3">
                            <button className="btn btn-danger btn-sm">Get Weather</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default form



