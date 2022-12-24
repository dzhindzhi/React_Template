import React, { useCallback }  from "react";
import {List} from 'antd';
import VirtualList from 'rc-virtual-list';
import './movie.css';
const Movie = ({data, input, changeMovieData, setIsForm,  setAddElement}) => {
    const filteredData = data.filter((el) => {
        if(input === ''){
            return el;
        }
        else {
            return el.title.toLowerCase().includes(input);
        }
    })
    const clickCallback = useCallback(() => {
      setIsForm(false)
      setAddElement(false);
    }, [setAddElement, setIsForm])
    return(
        <VirtualList
            data={filteredData}
            height={600}
            itemHeight={40}
            itemKey="id"
          >
            {(item) => (
              <List.Item key={item.title} className="item" style={{cursor:'pointer',border: '1px solid rgba(0,0,0,0.35)',borderRadius: '5px', marginBottom: '3px'}} onClick={() => {
                changeMovieData(item)
                clickCallback();
                }}>
                <List.Item.Meta
                  title={item.title}
                  description={`${item.year} | ${item.genres.join(', ')}`}
                />
              </List.Item>
            )}
          </VirtualList>
    )
}

export default Movie;