import { styled } from "styled-components";

export const FeedRow = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;

    .postHeader {
        display: flex;
        align-items: center;

        &__avatar {
            margin-right: 12px;
            img {
                max-width: 50px;
                border-radius: 50%;
            }
        }

        &__info {
            &--authorName {
                color: var(--text-link);
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }

            &--time {
                font-size: 13px;
                color: var(--text-small);
            }
        }

        &__actions {
            margin-left: auto;
            cursor: pointer;
        }
    }

    .postContent {
        margin: 1rem 0;
    }

    .postActions {
        display: flex;
        align-items: center;

        div + div {
            margin-left: 1rem;
        }

        & > div {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px 12px;
            border-radius: 32px;
            background-color: #f0f2f5;
            cursor: pointer;
            transition: 0.3s all;
            font-size: 15px;

            &:hover {
                background-color: #e7e8e9;
            }

            svg {
                margin-right: 0.4rem;
            }
        }
    }
`;
