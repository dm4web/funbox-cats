import React from 'react';
import './Cat.scss';

class Cat extends React.Component {
    constructor() {
        super();
        this.onChangeCard = this.onChangeCard.bind(this);
    }
    onChangeCard(event) {
        const $current = event.currentTarget;
        if ($current.className === 'catalog__item') {
            $current.firstChild.classList.toggle('catalog__item-card--selected')
        }
    }

    render() {
        return (
            <section className="catalog">
                <h1 className="catalog__title">Ты сегодня покормил кота?</h1>


                <article className="catalog__list">
                    <article onClick={this.onChangeCard} className="catalog__item">
                        <div className="catalog__item-card card-product">
                            <p className="card-product__note">Сказочное заморское яство</p>
                            <p className="card-product__note card-product__note--focus">Котэ не одобряет?</p>
                            <h2 className="card-product__title">Нямушка <span>c фуа-гра</span></h2>
                            <ul className="card-product__bonus">
                                <li><b>10</b> порций</li>
                                <li>мышь в подарок</li>
                            </ul>
                            <img className="card-product__image" src={require('./img/funbox_logo.png')}
                                 alt="Нямушка c фуа-гра"/>
                            <div className="card-product__weight">0,5 <span>кг</span></div>
                        </div>

                        <p className="catalog__item-note">Чего сидишь? Порадуй котэ, <button className="catalog__item-note__button"
                                                                                             type="button">купи.</button>
                        </p>
                        <p className="catalog__item-note catalog__item-note--selected">Печень утки разварная с
                            артишоками.</p>
                        <p className="catalog__item-note catalog__item-note--disabled">Печалька, с фуа-гра закончился.</p>
                    </article>


                    <article onClick={this.onChangeCard} className="catalog__item">
                        <div className="catalog__item-card catalog__item-card--selected card-product">
                            <p className="card-product__note">Сказочное заморское яство</p>
                            <p className="card-product__note card-product__note--focus">Котэ не одобряет?</p>
                            <h2 className="card-product__title">Нямушка <span>c рыбкой</span></h2>
                            <ul className="card-product__bonus">
                                <li><b>40</b> порций</li>
                                <li><b>2</b> мыши в подарок</li>
                            </ul>
                            <img className="card-product__image" src={require('./img/funbox_logo.png')}
                                 alt="Нямушка c фуа-гра"/>
                            <div className="card-product__weight">2<br/> <span>кг</span></div>
                        </div>

                        <p className="catalog__item-note">Чего сидишь? Порадуй котэ, <button className="catalog__item-note__button"
                                                                                             type="button">купи.</button>
                        </p>
                        <p className="catalog__item-note catalog__item-note--selected">Головы щучьи с чесноком да свежайшая сёмгушка.
                        </p>
                        <p className="catalog__item-note catalog__item-note--disabled">Печалька, с рыбой закончился.</p>
                    </article>


                    <article className="catalog__item">
                        <div className="catalog__item-card catalog__item-card--disabled card-product">
                            <p className="card-product__note">Сказочное заморское яство</p>
                            <p className="card-product__note card-product__note--focus">Котэ не одобряет?</p>
                            <h2 className="card-product__title">Нямушка <span>c курой</span></h2>
                            <ul className="card-product__bonus">
                                <li><b>100</b> порций</li>
                                <li><b>5</b> мышей в подарок</li>
                                <li>заказчик доволен</li>
                            </ul>
                            <img className="card-product__image" src={require('./img/funbox_logo.png')}
                                 alt="Нямушка c фуа-гра"/>
                            <div className="card-product__weight">5<br/> <span>кг</span></div>
                        </div>

                        <p className="catalog__item-note">Чего сидишь? Порадуй котэ, <button className="catalog__item-note__button"
                                                                                             type="button">купи.</button>
                        </p>
                        <p className="catalog__item-note catalog__item-note--selected">Филе из цыплят с трюфелями в бульоне.</p>
                        <p className="catalog__item-note catalog__item-note--disabled">Печалька, с курой закончился.</p>
                    </article>


                </article>

            </section>
        );
    }
}

export default Cat;
