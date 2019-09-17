import React, { Component } from 'react';
import s from './ModalCreateGoal.module.css';

class ModalCreateGoal extends Component {
  state = {};

  render() {
    return (
      <div className={s.overlay}>
        <div className={s.modal}>
          <form className={s.formCreateGoal}>
            <label className={s.par}>
              Що я хочу
              <input
                className={s.input}
                name="valueInputSurname"
                type="text"
                placeholder="Дай своїй меті назву"
              />
            </label>
            <label className={s.par}>
              Скільки балів треба набрати
              <input
                className={s.input}
                name="access"
                type="text"
                placeholder="Напиши при якій кількості балів мета буде вважатися досягнутою (напр.: 1000)"
              />
            </label>
            <textarea
              className={s.textarea}
              name="message"
              cols="30"
              rows="10"
              placeholder="Напиши, що тебе мотивує:"
            />
            <button className={s.button} type="button">
              Ok
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ModalCreateGoal;
