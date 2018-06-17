
    var snake;
    var timer;
    var sum;
    var food;
    var content = document.getElementsByClassName(content);
    content.style.backgroundColor = 'red';
    // 食物
    function Food(){
        this.width = 20;
        this.height = 20;
        this.background = 'red';
        this._food = null;
        this.position = 'absolute';
        this.x = 0;
        this.y = 0;
        this.show = function(){
            if(this._food == null){
                this._food = document.createElement('div');
                this._food.style.width = this.width + 'px';
                this._food.style.height = this.height + 'px';
                this._food.style.background = this.background;
                this._food.style.position = this.position;
                var content = document.getElementsByClassName('content')[0];
                content.appendChild(this._food);
            }
            this.x = Math.floor(Math.random()*40);
            this.y = Math.floor(Math.random()*30);
            this._food.style.left = this.x * this.width + 'px';
            this._food.style.top = this.y * this.height + 'px';
        };
    }
    window.onload = function(){
        food = new Food();
        food.show();
    }
    
    

