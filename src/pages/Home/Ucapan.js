import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

const api = axios.create({
  baseURL: "https://api2.bagas3.my.id//",
});
const event = "6140f0803013cb6f4c55c860";

export default class Ucapan extends Component {
  state = {
    messages: [],
    name: "",
    message: "",
    timeNow: "",
  };

  constructor() {
    super();
    api.get(`event/${event}`).then((res) => {
      this.setState({ messages: res.data.data.message });
    });
    api.get(`event/${event}`).then((res) => {
      this.setState({ timeNow: res.data.ServerDate });
      console.log(res.data.ServerDate);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      message: this.state.message,
    };

    api.post(`message/${event}`, data).then((res) => {
      this.setState({
        name: "",
        message: "",
        messages: [data, ...this.state.messages],
      });
    });
  };

  render() {
    return (
      <div className="ucapan-container" id="gal-wed" data-aos="fade-up">
        <h1 className="title">Dari Sahabat</h1>
        <div className="pesan-container">
          <h3>Pesan</h3>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Nama Anda"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <textarea
              placeholder="Tulis pesan untuk mempelai"
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
            />
            <button>Kirim</button>
          </form>
          <div className="comment-box">
            {this.state.messages.map((message) => (
              <div key={message.id} className="komentar">
                <b>{message.name}</b>
                <p>{message.message}</p>
                <br />
                <p>
                  {moment(message.createdAt)
                    .startOf("minute")
                    .fromNow()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

// const timeNow = new Date('2021-09-24T08:38:50.815Z').getTime()
// const timeMessage = new Date('2021-09-14T18:57:31.347Z').getTime()
// const selisih = timeNow - timeMessage

// let secondTime = selisih/1000
// let MinuteTime = secondTime/60
// let hourTIme = MinuteTime/60
// let dayTime = hourTIme/24
// console.log(Math.floor(dayTime))
