var api = {
    _apiKey: '123abc456def',
    /* mock methods that use this._apiKey */
    getUsers: function(){},
    getUser: function(userId){},
    setUser: function(userId, config){}
  };

  // logs '123abc456def';
  console.log("An apiKey we want to keep private", api._apiKey);

  // get and mutate _apiKeys as desired
  var apiKey = api._apiKey;
  api._apiKey = '987654321';