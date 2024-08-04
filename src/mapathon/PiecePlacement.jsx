import React from "react";
import Piece from "./Piece";

let maxW = 1920, minW = 0;
let maxH = 1080, minH = 0
let newX, newY;

const pieces = [];
function PiecePlacement({ N, T }) {
    for (let i=0; i < N; i++){
        newX = Math.random() * (maxW - minW) + minW
        newY = Math.random() * (maxH - minH) + minH
        
        pieces.push(
            { x: newX, y: newY, type: T},
        );
        console.log({ x: newX, y: newY, type: T});
    }

    console.log(pieces);

    const renderBoardPieces = () => {
        return pieces.map((piece, index) => (
          <Piece 
            key={`piece-${index}`} 
            x={piece.x} 
            y={piece.y} 
            letter={piece.letter} 
          />
        ));
      }

    return( 
        renderBoardPieces()
    )
}

export default PiecePlacement;