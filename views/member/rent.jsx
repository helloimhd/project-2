var React = require('react');
var MemberLayout = require('./memberLayout');

class Rent extends React.Component {
    render () {

        const rentPackages = this.props.rentPackages;
        // return the array of objects


        let allPackages = rentPackages.map(obj => {
            const link = `/rent/${obj.id}`;

            return <div class="package-container">
                    <div class="packImg-container">
                        <img src={obj.img} class="img-fluid" />
                    </div>

                    <div class="title-container">
                        <h4>{obj.name}</h4>
                    </div>

                    <div class="details-container">
                        <h6>{obj.details}</h6>
                    </div>

                    <a class="btn btn btn-outline-dark float-right" href={link} role="button" id="packageButton">Game On!</a>
                </div>

        }) // end of map

        return (<MemberLayout>

            <h1>Packages</h1>
            <div class="packageMain-container">
                {allPackages}

            </div>

        </MemberLayout>)  // end of return

    }  // end of rendering
} // end of class

module.exports = Rent;