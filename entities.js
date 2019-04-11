class Entity extends Phaser.GameObjects.Sprite {
   constructor(scene, x, y, key, type) {
      super(scene, x, y, key);
      this.scene = scene;
      this.scene.add.existing(this);
      this.scene.physics.world.enableBody(this, 0);
      this.setData('type', type);
      this.setData('isDead', false);
   }
}

class Player extends Entity{
   constructor(scene, x, y, key){
      super(scene, x, y, key, "Player");
      this.setData("speed", 160);
   }
   create(){
   }
   moveUp(){
      this.body.velocity.y = -this.getData('speed') * 2;
   }
   moveDown(){
      this.body.velocity.y = this.getData('speed');
   }
   moveLeft(){
      this.body.velocity.x = -this.getData('speed');
      this.play('left', true);
   }
   turn(){
      this.body.velocity.x = 0;
      this.play('turn');
   }
   moveRight(){
      this.body.velocity.x = this.getData('speed');
      this.play('right', true);
   }

}

class Robot extends Entity{
   constructor(scene, x, y, key){
      super(scene, x, y, key, "Robot");
      this.setData("speed", 60);
      this.body.setBounce(0);
         // robot.setBounce(0);
         // robot.setCollideWorldBounds(true);
         // robot.setVelocity(Phaser.Math.Between(-200, 200), 20);
   }
   moveLeft(){
      this.body.velocity.x = -this.getData('speed');
      // this.play('left', true);
   }
   stop(){
      this.body.velocity.x = 0;
      // this.play('turn');
   }
   moveRight(){
      this.body.velocity.x = this.getData('speed');
      // this.play('right', true);
   }

   update(){
      // console.log(this.scene.player.x);
      if(this.body.x > this.scene.player.x){
         this.moveLeft();
      } else {
         this.moveRight();
      }
   }
}
