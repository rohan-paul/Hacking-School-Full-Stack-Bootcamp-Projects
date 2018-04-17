function fun( i)
{
  if ( i % 2 )
    return (i++);

  else
  	return fun(fun( i - 1 ));
}

// fun(200);

console.log((Math.floor(1 / 2 )));

// console.log(((1 % 2)));