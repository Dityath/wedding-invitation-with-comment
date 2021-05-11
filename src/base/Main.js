import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// Component
import NotFound from '../helper/components/404';

// Pages
import Home from '../pages/Home/index'


// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as mainActions from '../redux/actions/main';



class Main extends Component {	
	componentDidMount() {		
        // this.props.actionsMain.get_item();							
		
	}	

    render() {
        return (
            <Router>
				<div id="Main" className="main-panel">					
					<div className="content-container">
						<Switch>
							<Route exact path="/" component={Home} />							
							<Route exact path="/:id" component={Home} />							
							<Route component={NotFound} />
						</Switch>	
						{/* <audio autoPlay>
							<source src="https://res.cloudinary.com/bagastri07/video/upload/v1620572921/y2mate.com_-_Marry_Me_Thomas_Rhett_Lyrics_btvj9e.mp3" type="audio/mpeg" />                    
						</audio>		 */}
					</div>																
				</div>
			</Router>
        );
    }
}

function mapStateToProps(state) {
	return { main: state.main }
}

function mapDispatchToProps(dispatch) {
	return {		
		actionsMain: bindActionCreators(mainActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);