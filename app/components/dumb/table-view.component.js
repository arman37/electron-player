/**
 * @author arman
 * @since 1/26/17
 *
 */

import React from 'react';

const TableView = ({play, trackList, tbodyHeight}) => {
    return (
        <table className="blue w3-container w3-animate-zoom">
            <thead>
            <tr>
                <th className="track">Track</th>
                <th className="artist">Artist</th>
                <th className="album">Album</th>
                <th className="genre">Genre</th>
                <th className="time">Time</th>
            </tr>
            </thead>
            <tbody className="shadow elegant-shadow" style={{height: tbodyHeight}}>
            {
                trackList.map((track, index) => (
                    <tr key={index}>
                        <td className="track">{track.metadata.title} <span onClick={play.bind(null, track)} className="track-play">&#x25ba;</span></td>
                        <td className="artist">{track.metadata.artist}</td>
                        <td className="album">{track.metadata.album}</td>
                        <td className="genre">{track.metadata.genre}</td>
                        <td className="time">{track.metadata.time}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
};

export default TableView;
