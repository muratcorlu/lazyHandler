<!DOCTYPE HTML>
<html>
	<head>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js"></script>
        <script type="text/javascript">
            var timer = {
                  started: 0,
                  end: 0,
                  now: function(){ return new Date(); },
                  start: function(){ this.started = this.now(); },
                  since: function(){ this.end = this.now(); return this.now()-this.started; }
                };
            $(function(){
                timer.start();
                for(var i = 1; i <= 1000 ; i++) {
                    $('.click'+i).click(function(){
                        alert('Run well...');
                    });
                }
                alert('Events binded in '+timer.since()+' ms');
            });
        </script>
    </head>
    <body>
        <?php for ( $i = 1 ; $i <= 1000 ; $i++ ) { ?>
        <a href="#click" class="click click<?=$i?>">Click Me!</a> <br />
        <?php } ?>
    </body>
</html>
