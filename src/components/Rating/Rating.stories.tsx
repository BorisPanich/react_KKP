import { action } from '@storybook/addon-actions';
import { ComponentStory, Meta } from '@storybook/react';
import React, { useState } from 'react';
import { getCategoryObj, ParamCategoryType } from '../Accordion/Accordion.stories';
import { RatingValueType, Rating } from './Rating';

export default {
    title: 'Rating',
    component: Rating,
    argTypes: {
        /** group props params */
        color: {
            control: 'color',
            ...getCategoryObj('Color')
        },
        onClick: {
            ...getCategoryObj('Events')
        }
    }
} as Meta;

const callbackAction = action('event fired');

const Template: ComponentStory<typeof Rating> = (args) =>
    <Rating {...args} />;

// export const EmptyRating = () => Template.bind({})
// EmptyRating.args = {
//     value: 0,
//     onClick: callbackAction
// }
export const EmptyRating = () => <Rating value={0} onClick={callbackAction} />
export const Rating1 = () => <Rating value={1} onClick={callbackAction} />
export const Rating2 = () => <Rating value={2} onClick={callbackAction} />
export const Rating3 = () => <Rating value={3} onClick={callbackAction} />
export const Rating4 = () => <Rating value={4} onClick={callbackAction} />
export const Rating5 = () => <Rating value={5} onClick={callbackAction} />

export const RatingChanging: ComponentStory<typeof Rating> = (args) => {
    const [rating, setRating] = useState<RatingValueType>(0);
    return <Rating {...args}
        value={rating}
        onClick={setRating}
    />
}
// export const _RatingChanging = () => {
//     const [rating, setRating] = useState<RatingValueType>(0);
//     return <Rating value={rating} onClick={setRating} />
// }
