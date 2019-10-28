 <form method="post">
 	<input type="text">
<button type="submit" name="button">START Image optimize</button>
</form>

<?php
    if (isset($_POST['button']))
    {
        $out=shell_exec('grunt');
		echo '<pre>'.shell_exec('grunt').'</pre>';
    }
?>

	