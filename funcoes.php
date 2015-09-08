<?php
function connect()
{
	include ("conexao.php");
	return $con;
}

function anti_injection($_input)
{
	$__output = stripslashes($_input);
	
	$outpu  = 0;
	$outpu += strpos($__output,";"			);
	$outpu += strpos($__output,"'"			);
	$outpu += strpos($__output,'"'			);
	$outpu += strpos($__output,"="			);
	$outpu += strpos($__output,"DROP"		);
	$outpu += strpos($__output,"ALL"		);
	$outpu += strpos($__output,"ADD"		);
	$outpu += strpos($__output,"DELETE"		);
	$outpu += strpos($__output,"INSERT"		);
	$outpu += strpos($__output,"ADD"		);
	$outpu += strpos($__output,"FROM"		);
	$outpu += strpos($__output,"DATABASE"	);
	$outpu += strpos($__output,"CREATE"		);
	$outpu += strpos($__output,"ALTER"		);
	$outpu += strpos($__output,"RENAME"		);
	$outpu += strpos($__output,"DESCRIBE"	);
	$outpu += strpos($__output,"START"		);
	$outpu += strpos($__output,"TRANSACTION");
	$outpu += strpos($__output,"COMMIT"		);
	$outpu += strpos($__output,"ROLLBACK"	);
	$outpu += strpos($__output,"UNION"		);
	$outpu += strpos($__output,"ORDER"		);
	$outpu += strpos($__output,"--"			);
	$outpu += strpos($__output,"/*"			);
	$outpu += strpos($__output,"*/"			);
	$outpu += strpos($__output,"||"			);
	$outpu += strpos($__output,"' --"		);
	$outpu += strpos($__output,"' #"		);
	$outpu += strpos($__output,"'/*"		);
	$outpu += strpos($__output,"<"			);
	$outpu += strpos($__output,">"			);
	$outpu += strpos($__output,"%"			);
	$outpu += strpos($__output,"="			);
	$outpu += strpos($__output,"\""			);
	$outpu += strpos($__output,"\'"			);
	
	if ($outpu == 0)
	{
		$__output = str_replace(";"			, "", $__output);
		$__output = str_replace("'"			, "", $__output);
		$__output = str_replace('"'			, '', $__output);
		$__output = str_replace("="			, "", $__output);
		$__output = str_replace("DROP"		, "", $__output);
		$__output = str_replace("ALL"		, "", $__output);
		$__output = str_replace("ADD"		, "", $__output);
		$__output = str_replace("DELETE"	, "", $__output);
		$__output = str_replace("INSERT"	, "", $__output);
		$__output = str_replace("ADD"		, "", $__output);
		$__output = str_replace("FROM"		, "", $__output);
		$__output = str_replace("DATABASE"	, "", $__output);
		$__output = str_replace("CREATE"	, "", $__output);
		$__output = str_replace("ALTER"		, "", $__output);
		$__output = str_replace("RENAME"	, "", $__output);
		$__output = str_replace("DESCRIBE"	, "", $__output);
		$__output = str_replace("START"		, "", $__output);
		$__output = str_replace("TRANSACTION", "", $__output);
		$__output = str_replace("COMMIT"	, "", $__output);
		$__output = str_replace("ROLLBACK"	, "", $__output);
		$__output = str_replace("UNION"		, "", $__output);
		$__output = str_replace("ORDER"		, "", $__output);
		$__output = str_replace("--"		, "", $__output);
		$__output = str_replace("/*"		, "", $__output);
		$__output = str_replace("*/"		, "", $__output);
		$__output = str_replace("||"		, "", $__output);
		$__output = str_replace("' --"		, "", $__output);
		$__output = str_replace("' #"		, "", $__output);
		$__output = str_replace("'/*"		, "", $__output);
		$__output = str_replace("<"			, "", $__output);
		$__output = str_replace(">"			, "", $__output);
		$__output = str_replace("%"			, "", $__output);
		$__output = str_replace("="			, "", $__output);
		$__output = str_replace("\""		, "", $__output);
		$__output = str_replace("\'"		, "", $__output);
		
		return htmlentities($__output);
	}
	else
		return false;
}
?>
