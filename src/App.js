import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulated product data with image URLs
    const sampleProducts = [
      {
        id: 1,
        title: 'MSI GF63 thin',
        price: '₹63999',
        rating: 6.5,
        description: '8GB, Intel i5 11400H,Nvidia RTX 3050 4GB',
        image: 'https://images.unsplash.com/photo-1617294864705-eaf3c911259f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXNpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 2,
        title: 'Asus Tuf Dash F15',
        price: '₹75999',
        rating: 8.5,
        description: '8GB, Intel i5 12500H,Nvidia RTX 3050 4GB',
        image: 'https://images.hindustantimes.com/tech/img/2021/03/09/original/Untitled_design_1615274283756.png',
      },
      {
        id: 1,
        title: 'Asus Vivobook',
        price: '₹73999',
        rating: 6.5,
        description: '8GB, Intel i5 11400H,Nvidia RTX 3050 4GB',
        image: 'https://m.media-amazon.com/images/I/71TzSqpfz8L._AC_UF1000,1000_QL80_.jpg',
      },
      {
        id: 1,
        title: 'Acer Nitro 5',
        price: '₹79999',
        rating: 8.0,
        description: '8GB, Intel i5 11400H,Nvidia RTX 3050 4GB',
        image: 'data:image/jpeg;base64,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',
      },
      {
        id: 1,
        title: 'Lenovo Ideapad',
        price: '₹68999',
        rating: 5.5,
        description: '8GB, Intel i5 11400H,Nvidia RTX 3050 4GB',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBgSFRUYGRgYGhwUGhYcGBgdGRwcGRUZGRwaHBkcIS4lHB4sHxkcNDgmKy8xNTU3HCU7QEgzPy40NTEBDAwMEA8QHxISHzQnIyw0PzU/PTExPzQ0NTQ0NDQ2NDE6NTQxNDE0PTQ0NDQ0ND8/NDY0Nj00NjQ0NzU0PTY0Nf/AABEIAL0BCgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xAA9EAACAgAFAQUGAggGAgMAAAABAgARAwQSITFBBQYiUWETMlJxgZEHQhRigqGxwdHwI3KSouHxM8IVFkP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAApEQEBAAICAQMCBQUAAAAAAAAAAQIRAzEhBBJBE2EyUYGR0SJCcaHB/9oADAMBAAIRAxEAPwDs0REBERAREQEREBESzjqxRgp0sVIDVdEjY11o9IBsdQaLKD5EgH7T32yn8y/cTg+P2NmdTh8RvaBir6ne9QO5ut75B6gg9ZbPY+Y6Of8AX/VZ2np+Szclc7y4S6td+1DzH3ntz58fsjM825PmMQD9wIEtP2fmVK6fafreMfcG5F4OWf239kzkwvzH0TE+dWws2PzYu3nTD7ESk4ubH5sT/Qf6St4s53L+yffj+b6MifORz2bX87j9lh/OUntjNL/+pHz1j/2lbjZ2ncfSET5yyPerPYDalzGJV2afUPWsN7Wdr7n94lzuCXHvKaPTUrC0eumodOhDDpISkUREBERAREQEREBERAREQEREBERAREQEREBERAREQIX307LojNKNtkxR9aR/oTpPoR0WRpVnUsfCV1ZGAZWBVlPBBFEH6Gc3zeUOBivgNZ00VY/mRr0t89iD6qelT1PQ+o8fTv6PP9Zx2f1T9WMyShlmSV2Nc9L85EsTvK6O2HiYA1ISraWbauu4O09DLlxx7umTjmWX4W/YTwTRp3pwjyjj5aT/ADBmSnb2XP5yPmrf0lpyYZdV29uU7jbCVMZhZftDDc0roSegYX9uZllpbxVL2pbDB5AP0EwO6PaH/wAfn9DGsJ9vQYbvz+w/+1jM8tNJ3iwtSDEUW2GS1fEhFOn1X+AmT1nD7+Pc7nlo4M7jl56rvcSLdwu2hmsotnU+FSMerDSCj/tLW/mDJTPCegREQEREBERAREQEREBERAREQEREBERAREQEREDyR7vZ2YcbC9ogvEwrZQOWU1rQepABHqqyQxJwyuGUyncVyxmU1XKcDMBgCDYO4PQgyPd7MmRWYQkD3Xrf0Vq4PkfQiSXvhkDlMfWorCxyWXyV+WT0B3YftDhZqDm1dSjC1YaSPMHYz38fbz8funz/AKrzLw5cee4g+ODqYOgJB3tdJ33F6aq7lkhPhI/yvQ/3AzIOpdYJ3XwFGJLFeBR60AtV0II2jExdLKHUHSoSqFMumgwIqzRsNv0mT6U1u6/60ze5NrWGNJDq7gqQQSmwI3G4b+UlWT7ew3ABbS/wttv+qeD/ABkZR1CEKzB9XRqVk08EeYPHncfoWGz6LOlh4HIo2QDpI681t1+c6cdzwy1jZZ91vpzObTHEzUwcbNSPtgY+BsrakH5TbCv4j6bS7hdoq3veA+d2v+rp9amrH1GPWU1fu53js68pJ+HvbH6HnPZsaw3pT5aXbwH9hzXoHM7pPmjPLQGIBejcj4kIph9p3PuN2z+lZRGZtTpWG5+KlBV/2lIPzsdJ4nqeL6fJddXzGvDLcSWIiZ1yIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgarvD2Smby74DbXurdVYbqw+R+4sdZwR8R8HEfAxRpdGZHX1Bo15g9D1BBn0fOY/iv2ANIz6JdUmMBzp4R/odj6FeizV6b1F4rr4rly47m525BrZcQq1t5G9yo8z8v5+UyHVdyN63C1fhN7kitxt06nylOcypYB8M2V3Hn8vWW8s+oUwojnfSf37S2efc8/ZTCy+Yz1x21JariDBF0QGU4erUVbYFlBc78i+lbUK2EUcaSHJVsNtR2Go6kYHYiuG5seVzHYOp3B2FbixR6b7dT956+YZkXDJtVJKjouo2wHoTR/7nH323dX9upJGO2ZxcNqXFLDnSxux8j/L1lwZ5H2xVKNxrXdT8x1/f9J5j5cYrADYsaG1AFjxVnw3U1C4zDY7jyP8AWWnLlj43uffySb/ykAw3wwGVgytwym1OxNEdDQP9ZK/wu7f9hmRhMaw8SsM+QDMdDc/lclfQP6SBdnZvQwZTW9lGNK21c8fXabl8NAoxkvUn/lWtLEPu3huhzYI225NS2euTHc+Pj+Eyavh9ORI93K7Z/S8omIW1Ov8Ah4h82UAhv2lKt+1JDMroREQEREBERAREQEREBERAREQEREBERAREQEREBLOZwFxEbDdQyspVlPBVhRB+kvRA+b+8/Yr5HNNgEnSDrw2+JCTpPzG4PqpmEulwbAD8hqG5HQjgztn4i92hncvrRbxsG2SveZT7yD1IAIHmoHWcOxcMpZDWAaIbkEcj5/Od8OSTxWTl4st+7FXjoXIZSg1C9CsRpJYgroY7bjgdCPWW8uuoHD0AsLcG6agviUDrxYHo3nLS4qnUWBsjajw1jf1B68c3KC+9nfruLB+YOxi4S9L48tn4orckbVxxsAefPrNVmsKm9DvNxj4iMSVTRZutRZQD0AIsV/D7zFxcvrpQQDdAm6F7cjeouFsWxyx3tqakn7u5sFNOIU0oQoZrDqCCdJYCijURTWLqqNTC/wDreaO64YcHgo+G5PnSq1kjyqWEyWNl2vEwcRVNqysjLYPIsjY+R6EA9JGEywsuk56ympfP2dD/AA07ZGVzZyzNeHiUgN7UxPsm+jEqf8w8p26fLC4nsyDqvTTKwNFsNtrHkQenRgZ9Fdz+2f0vKpiEguvgxK+JQPF8mBDD0YSnJjq+Ol8buN9ERKLEREBERAREQEREBERAREQEREBERAREQEREBEwO0+1MHLrrxXCjoOWPoqjcyC9ud8cbE8GADhoSV23xm8gANlvpVmBMO2u8WBlQdbanqxhru/zI/KPU1ODd9u0v0nMnF9mqK2+lTZuzZLV7x+3pze5xCTqVydLMNZBJLNXAN27WQd/TgnfW5/Kh/eXxUWobNqZqChd9CqdtJo7ixAi74Q5VvoefoRsf3SrDzTINNAgm6IHOkr73PXi6sDymXmezXW9NMNRTarJABIA5NA80JgFa2/d/xJls6VuMy7Z6YmA5qzhk/Fugt9vEBYAUjkdDvvKjk206xuhOnUNxqKlgtg1qoHYEnY+U1dCeqzAEAmjVgE0a4sdas/czpOS/LnlwzuXSUdkZrEoq+llFKwZdW29BlIOpfpY35uSHL4gU6Ux8xlnrUoRmxMJht4hgG7W/g1AVvVSA5TtN0Ng+lHcfKj/KSHs7vFhkaMZLQnUQLIB+NPzI3qL9bmrj5cMpq9smc5cL5m59kk/T+0NB/wAPAzuGwKjGwwj87FWVFVlvrtt9Jj/hV24cvmP0XEDKuJSaWBBVrPsyQd+SU/aTyl3CwsNiMxh4hcbVmMNymOh6Lilef2wQfOa7vRhY7aM02KMT2Q0s2kLjBGYbtp2YKSCGF1uZXm4rcfdLvS/Dz4e729W/Fd7iaTun2wM3lcPGsaq04lca12Yj0OxHowm7mJuIiICIiAiIgIiICIiAiIgIiICIiAiUOwAJJAA3JPAkV7Y754aWmABiPxq/IPry3029YEmzOZTDUu7KqjlmNCRDtXvexOjAUgEX7Vl30/EiNWrbcX/DeQjtPtXGxXD4zF6NgH3B8l4E9wcVXI55FgVrPioKhIIU0evpd1YC9j5hmZmZi7tYLMA3hsbmwSgHmPltMDEYH3r8tXJamIITyXnff3dr6ZGMl6iAa3YgG2FmlV3NajxxR36iWXF3uB0LgDSooeFV2F7Dy4A8I5CywYeEU2kGhyEs8sRYc7+bDf0sY2OqlSBZUCgK8TsRzSmx6bn8oG1zMZKq1FM3gQnUGva2469DV1+YSxjLfmW/MxIGmjRCfEa89yRuVEDCfUrVqXYUWIXShN2EVT9gADsfCJi5nLo42QL4QiKTRJsNrZiQNwWFmh7temW6kDg6Aeg0luqlrFsm+1gqdwJRu248WI5CqFDsVAI3onY7crq22AEJabMdlspYp41QoDwG8d0NIJ/MCNr4+2BioQxBUqQarewR0kkY6CADaIeWOoaiAWACtQ33oEHz8paxEV1OoLqLa2dtCgsdVqrBbVX3NGlXRBpHT6ynT5Tb5nswUzoSEGgqrnxsH4IIUKwFG28Iqj6DX5nKujFHRkYcqykEfQ7whTg5hkNg0fPg/Kxv9pvMn3jOkpiKHQiqa9rFGm5HXm+Zo0cgVyPI7j/j6QyqeLB8uR/Ufvl8eTLHquPJwYZ9x0b8Ke8S4GM2XxGC4b+EFiKVlsoxbgWtqT5hJ2tGBFggg7gjifKGUxCjhunBrfY/2D9JKezO28zlm/wMZ0HwA6kP7DWv1qUdo+iYnPe6ff18fETLZhFDuaRkuiaJ8Sm9PHIP0E6FAREQEREBERAREQEREBERASPdtd6sDAtVPtMQbaFOwP6z8L8tz6TC794mOqKUdlwzavp2NmtNsN9J3H9bnPCIGy7X7dx8yfG1L0w12UfMfmPqf3TWCUO4Hz8pZZyf6f3zAvO4O3P8JiupG4+398iXA08JgXst2gPdcbdGHIs3v8W/19eky2wwaYEEXYYbg10I/kRY9JpsbD6/v/r/AF/7lvAzj4TbH5g7gj1HUf2IG2NrYutQIZyQFon3RZ2vYUea5N1LOKq0CBSBdkseInrqqwCSTVV0AF3LmUzyvsANbahRA0gbkaSb3oV0Y3XWWM9mkwzsSx06dJPu8XpI2UdKo7bbcwljOh1DjXQezqLIFrxX0oafELrgVxMdkBFEcmy9hRW1jQBRoA0BRPqSJljEVx4Gs6dRIB1LRFnzSiQLH3NywQPCDQUbFqJbg0SLpt6s818R5hKyy7NpYhLCkrq8RoHSW0izRum9Z5iKGJLUnwDxMBbMeDZUc7gEX5XMj2IpizNuKV0IKkg3pfcECunI6g8QMuARQLkIHI0OfXSQKatFHUL56cwKEVG0gBUa9DHWHwWsWxIa9Dmls6uv5ZbbDUKUKo1koHIYoqi9JQv405FbE/IFgclzsxOoawNJ1mgNyPdGl9IJFHqeORGZw9DMSNLCmKhH8LWSUKvZutPAYGz0gavF7GVz4HCVYJd10FgaIVlvbdRW9E7kDcarHybpRZGAOwNGiRyAeCRe46SSYp0AkkqCQ5fUNLVvwth9+gvqK8sXEzOLjgongw+L3qgCOCxC7E+tdQNpKL48o+mGboc+Qm5w0fDXU7AcKBQsDc8+czMjkCzfo+Ww2xMZxyOQDtqJ2CL+sSBxVzqfd38PcJCuNm6xsQEME5wkPTY++R5nb02uTZpWZbRX8M+72YxMzh51kKYCamVn2bELIyqUHJXxXqOxra+nZoiQkiIgIiICIiAiIgIiICIiBaxsJXUqwBVhRB4IPScx71d3my7aks4THwt1U/Ax/gZ1OWcxgLiKUZQysKKngiBwkiUmSTvT3dbLNYs4bHwP5ddD+vkf+RI00D255cpioHpMsYiA7StmlDGBV2dh4SsTingjSpsKw6i697jY83tfTY43ZuGz638O5BUXufMj5+Rv5zTPvsftMjLdospOvW4oBTYLLV+fvg+pvbrxCTtTO+zYIigMg8LgFR13XgnmvlsfKVZHNYlLi6Bhm9GsMAptTZOHRNEGiQNPi4AuYOf7WbEYEqKDB6IuyDe/p6CZuBnMPEIADB2OkYe5tiKGhgDYutmo9LPMhaRUioSrAj3Wt1VCTuQygsSrra0PW9rFmgoaUnYEMNRdQpK87DdRY6+Gx7wO0uMlBTe1limptN7qQyiqY82PS74nmaxV0K5eiBoIK7gKPCAyjx7bdG23FVRFWmcbFQtldJKoniBa/ETqDgFRR6VtRu8TM5oKQoGpwAuhboV1Y9D5gf7ZRrfEpULIgvk83zQ/LfkvNm7mb2Z2ezMMHL4bPiHoBvXmTwq+poSUdMAZYWcTHYXXuihQHn0A9T+8yU93O5+Yz2l2BwMvWzlfGwsHwIw34HjYAbAgSX92Pw8w8IjGzVYuIDqXD5wkPnR99v1m46AVcn0nfjwpq27tazsPsLAyeH7PAQKDuzcux+JmO7H5zaREhYiIgIiICIiAiIgIiICIiAiIgIiIGPm8qmKjYbqGVhRB/vY+s5L3n7vtlX3so3uv5j4W/WH/AF1nYpiZ/IpjYZwsQalb7jyIPQjzgcMbaWmabjvJ2I+UxNLeJGso/Rh5HyYdRNI7QPGaWmaGaW2aB6xltjBaU3At4uGD85iMpEzjKTh+cixbHLT3LdovpKFQ7XqDsW1b0KY34ht6V5z1sPfXiNqPQdB6Afy/7m37vd3cxnDWXSsO6bGaxhijRo8s3oL9anVe7XcjL5OsQj2uMN/auBsf1F4T57n1jRb+SBd2u4uZzJGLjs2DhEDYgB2Fk2iH/wAYo8tZ2ve9uqdj9jYGUw/Z4GGEHJPLMfNmO5P9ibOJKpERAREQEREBERAREQEREBERAREQEREBERAREQMHtTs3DzGG2FiC1P3B6MD0InFu8XYuJk8U4b7qd0evCy+foR1HT7Tu81nbnZGHmsJsHEGx3Vh7yt0ZT5/x4gcCZpbYzZdv9j4mTxjg4g9UYe6y/Ev8x0mpZoFaKWIVQSTwBNjgZREXViGxwWBIQX8LV/iOB0Xbi7uxq0xCCFALE7BACSxvawBZ/wAsnHd/8PMxmSuLnWbCTphCvaEeR6YY9Nz8jAh+Ty2Jj4nssuj4jngAbgXsWN0g9SanSe7f4aolYmdIxH5GCt+zX/MeXP2HoZN+yeysHLYYwsDDVFHQDcnzYndj6nebCBawsNVUKqhVAoKAAABwABwJdiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBrO2excHNYfssZdQ5Vhsyn4lbof49bnM8b8L8z7bQmNh+xu/atq9oB5aBsW+oHy4nX4gRzu13Qy2SF4a6sQimxmoufMDoo9Fr1uSOIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/9k=',
      },
      {
        id: 1,
        title: 'HP Victus',
        price: '₹83999',
        rating: 6.5,
        description: '8GB, Intel i5 11400H,Nvidia RTX 3050 4GB',
        image: 'https://www.digitaltrends.com/wp-content/uploads/2021/11/hp-victus-16-1.jpg?p=1',
      },
      // Add more products with descriptions...
    ];

    setProducts(sampleProducts);
  }, []);

  return (
    <div className="App">
      <h1>Amazon-like List View</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <h2>{product.title}</h2>
              <p>{product.description}</p> {/* Added description */}
              <p>Price: {product.price}</p>
              <p>Rating: {product.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
