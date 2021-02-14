import React from "react";
import {Form, Field} from 'react-final-form'
import ReactStars from "react-rating-stars-component";
import "./CommentForm.scss";
import axios from 'axios';


const CommentForm = ({total, items}) => {

    let rating = 1;

    const ratingChanged = (newRating) => {
        rating = newRating;
    };
    //refact
    const onSubmit = values => {
        const data = {...values, rating: rating};
        console.log(data)
        const apiUrl = 'http://localhost:8000/api/new-comment';
        axios.post(apiUrl, JSON.stringify(data), {headers: {"content-type": "application/json"}}).then((resp) => console.log('r', resp))
    };


    return (
        <section className="comment-form">
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <Form
                            onSubmit={onSubmit}
                            initialValues={{}}
                            render={({handleSubmit, form, submitting, pristine, values}) => (
                                <form
                                    onSubmit={handleSubmit}
                                    className="form"
                                    autoComplete="off"
                                >
                                    <div className="form__title">Отзыв</div>
                                    <div className="form__input-wrapper">
                                        <label className="form__subtitle">Ф.И.О.</label>
                                        <Field
                                            name="author"
                                            component="input"
                                            type="text"
                                            className="form__input"
                                        />
                                    </div>
                                    <div className="form__input-wrapper">
                                        <label className="form__subtitle">Ваш коментарий</label>
                                        <Field
                                            name="comment"
                                            component="textarea"
                                            type="text"
                                            className="form__input"
                                        />
                                    </div>
                                    <div className="form__input-wrapper">
                                        <label className="form__subtitle">Оценка</label>
                                        <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={submitting || pristine}
                                        className="form__btn"
                                    >
                                        Отправить
                                    </button>
                                </form>
                            )}
                        />
                    </div>
                </div>
            </div>

        </section>

    )
}

export default CommentForm;
