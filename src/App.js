import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'
import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNav: true,
    showRightNav: true,
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({showLeftNav: !prevState.showLeftNav}))
  }

  onToggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({showRightNav: !prevState.showRightNav}))
  }

  render() {
    const {showContent, showLeftNav, showRightNav} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNav,
          showRightNav,
          onToggleShowLeftNavBar: this.onToggleShowLeftNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowRightNavBar: this.onToggleShowRightNavbar,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
