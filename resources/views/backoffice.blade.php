<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">

    <title>Backoffice</title>
</head>
<body>
<div class="flex-center position-ref full-height">
    <div class="content">
        <div id="app">
            <back-office-app></back-office-app>
        </div>
    </div>
</div>
<script src="{{ mix('js/backoffice/manifest.js') }}"></script>
<script src="{{ mix('js/backoffice/vendor.js') }}"></script>
<script src="{{ mix('js/backoffice/backoffice.js') }}"></script>
</body>
</html>
