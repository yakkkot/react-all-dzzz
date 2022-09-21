import Joi from "joi";

const userValidator = Joi.object({
    name:Joi.string().regex(/^[a-zA-ZА-яіІїЇгГєЄ]{2,20}$/).required().messages({
        'string.pattern.base': 'Тільки букви, це ж імя',
    }),
    email:Joi.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required().messages({
        'string.pattern.base': 'Введіть нормальний емаіл',
    }),
})

export {userValidator}