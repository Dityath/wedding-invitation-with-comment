import React, { Component } from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api2.bagas3.my.id//'
})

export default class Ucapan extends Component {

  state = {
    messages: [],
    name: '',
    message: ''
  }

  constructor() {
    super();
    api.get('event/6140eed73013cb6f4c55c849')
      .then(res => {
        this.setState({ messages: res.data.data.message })
      })
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      message: this.state.message
    }

    api.post('message/6140eed73013cb6f4c55c849', data)
      .then(res => {
        this.setState({name: '', message: '', messages: [data, ...this.state.messages]})
      })
  }
  
  render() {

    return (
        <div className="ucapan-container" id="gal-wed" data-aos="fade-up">            
          <h1 className="title">Dari Sahabat</h1>
          <div className="pesan-container">
            <h3>Pesan</h3>
            <hr />
            <form onSubmit={this.handleSubmit}>
              <input type='text' placeholder='Nama Anda' value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
              <textarea placeholder='Tulis pesan untuk mempelai' value={this.state.message} onChange={e => this.setState({message: e.target.value})} />
              <button>Kirim</button>
            </form>
            <div className="comment-box">
              { this.state.messages.map(message => (
                <div key={message.id} className="komentar">
                  <b>{message.name}</b>
                  <p>{message.message}</p>
                </div>
              )) }
            </div>
          </div>
        </div>
    )
  }

}
