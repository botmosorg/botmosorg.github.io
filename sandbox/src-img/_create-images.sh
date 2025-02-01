#!/bin/bash

SPRITE_SIZE="32"

for tile in *.txt; do
    pipenv run python . -i $tile -o "${tile%.*}.png" &
done
wait

if [[ "$SPRITE_SIZE" == "32" ]]; then
    mogrify -scale 200% -interpolate Integer *.png
fi
convert *.png +append ../build/tiles.png

# Create tileMap
TILEMAP_FILENAME="tilemap.ts"
echo "export const TILEMAP = {" > $TILEMAP_FILENAME
i=0
for tile in *.png; do
    echo "  \"${tile%.*}\": [$i*$SPRITE_SIZE, 0]," >> $TILEMAP_FILENAME
    i=$(expr $i + 1)
done
echo "}" >> $TILEMAP_FILENAME