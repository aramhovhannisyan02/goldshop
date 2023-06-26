import React from 'react'
import css from './Section.module.css'
import { Link } from 'react-router-dom';
import { goldArray1, goldArray2 } from '../InGold/Gold';
import { Man, Woman } from '@mui/icons-material';



const Section = () => {

    return (
        <div className={css.section}>
            <div className={css.blk01}>

                <div className={css.blk02}>
                    <button className={css.but01} onClick={() => {
                        return goldArray1
                    }}>
                        <Woman className={css.icons} />
                    </button>

                    <button className={css.but01} onClick={() => {
                        return goldArray2
                    }}>
                        <Man className={css.icons} />
                    </button>
                </div>

                <ul className={css.ul01}>
                    {
                        <Woman /> ? (
                            goldArray1.map(({ id, name, path, img }) => {
                                return (
                                    <li key={id} className={css.li01}>
                                        <Link to={path} style={{
                                            width: '100%',
                                            height: '90%',
                                            // background: 'red',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-around',
                                            alignItems: 'center'
                                        }}>
                                            <img src={img} alt='404' style={{ width: '70px' }} />
                                            {name}
                                        </Link>
                                    </li>
                                )
                            })
                        ) : (
                            goldArray2.map(({ id, name, path, img }) => {
                                return (
                                    <li key={id} className={css.li01}>
                                        <Link to={path} style={{
                                            width: '100%',
                                            height: '90%',
                                            // background: 'red',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-around',
                                            alignItems: 'center'
                                        }}>
                                            <img src={img} alt='404' style={{ width: '70px' }} />
                                            {name}
                                        </Link>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>

                <div className={css.blk02}>
                    <button className={css.but02} onClick={() => {

                    }}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Section