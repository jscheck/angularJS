angular.module('gameApp')
    .constant('VERSION', 'v0.1')
    .constant('constants', (function() {
        this.ROWS               = 6;
        this.COLUMNS            = 7;
        this.TILE_SIZE          = 80;
        this.IMAGE_SLOT         = 'img/' + this.TILE_SIZE + '/slot.png';
        this.IMAGE_RED          = 'img/' + this.TILE_SIZE + '/red.png';
        this.IMAGE_YELLOW       = 'img/' + this.TILE_SIZE + '/yellow.png';
        this.IMAGE_BOARD_EMPTY  = 'img/' + this.TILE_SIZE + '/board_empty.png';
        this.IMAGE_BOARD_RED    = 'img/' + this.TILE_SIZE + '/board_with_red.png';
        this.IMAGE_BOARD_YELLOW = 'img/' + this.TILE_SIZE + '/board_with_yellow.png';

        return this;
    }()));
