import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeSearchFilter } from '../Actions'
import { selectProductsCount } from '../Reducers'

import Nav from '../Components/Nav'

class NavContainer extends Component {

    state = {
        search: false
    }

    handleChangeState = () => this.setState({ search: !this.state.search })

    handleChangeFilter = text => this.props.changeSearchFilter(text)

    render() {
        return <Nav changeFilter={this.handleChangeFilter} changeState={this.handleChangeState} search={this.state.search} {...this.props} />
    }
}

const mapStateToProps = state => ({
    productsCount: selectProductsCount(state)
})

const mapDispatchToProps = { changeSearchFilter }

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer)