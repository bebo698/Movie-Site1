import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
const CastList = props => {
    const { category } = useParams();
    const [casts, setcats] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id);
            setcats(res.cast.slice(0, 5))
        }
        getCredits();
    }, [category, props.id]);
    return (
        <div className='casts'>
            {
                casts.map((item, i) => (
                    <div className="cats__item">
                        <div className="casts__item__img" style={{backgroundImage:`url(${apiConfig.w500Image(item.profile_path)})`}}>
                              <p className="casts__item__name">
                                 {item.name}
                            </p>

                        </div>
                    </div>
                ))
            }
        </div>
    );
};



export default CastList;