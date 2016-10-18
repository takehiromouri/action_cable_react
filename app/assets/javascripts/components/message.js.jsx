let Message = React.createClass({
  render(){
    return(
      <div className="card">
        <div className="card-block">
          <div className="row">
            <div className="col-md-1">
              {this.props.message.user_id}
            </div>
            <div className="col-md-11">
              <p className="card-text">
                <span className="text-muted">{ this.props.message.user_id } at { this.props.message.timestamp } says</span><br />
                { this.props.message.body }
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})