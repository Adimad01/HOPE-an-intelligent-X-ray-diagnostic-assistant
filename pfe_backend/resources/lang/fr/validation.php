<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'Le champ :attribute doit être accepté.',
    'active_url' => "Le champ :attribute n'est pas une URL valide.",
    'after' => 'Le champ :attribute doit être une date  après :date.',
    'after_or_equal' => 'Le champ :attribute doit être une date supérieure ou égale à :date.',
    'alpha' => 'Le champ :attribute peut contenir uniquement des lettres.',
    'alpha_dash' => 'Le champ :attribute peut contenir uniquement des lettres, des chiffres, des tirets et des underscores.',
    'alpha_num' => 'Le champ :attribute peut contenir uniquement des lettres et des chiffres.',
    'array' => 'Le champ :attribute doit être un tableau.',
    'before' => 'Le champ :attribute doit être une date qui précède :date.',
    'before_or_equal' => 'Le champ :attribute doit être une date inférieure ou égale à :date.',
    'between' => [
        'numeric' => 'Le champ :attribute doit être compris entre  :min et :max.',
        'file' => 'La taille du fichier doit être comprise entre :min et :max kilobytes.',
        'string' => 'Le champ :attribute doit être une chaîne de caractères de taille comprise entre :min et :max caractères.',
        'array' => 'Le champ :attribute doit comporter  entre :min and :max éléments.',
    ],
    'boolean' => 'Le champ :attribute ne peut prendre que les valeurs Vrai ou Faux.',
    'confirmed' => 'Le mot de passe de confirmation ne correspond pas.',
    'date' => "Ce champ n'est pas une date valide .",
    'date_equals' => 'Le champ :attribute doit être une date égale à :date.',
    'date_format' => 'Le format de la date doit correspondre à ce format :format.',
    'different' => 'Le champ :attribute ainsi que le champ :attribute :other doivent avoir des valeurs différentes.',
    'digits' => 'Le champ :attribute  doit comporter :digits chiffres.',
    'digits_between' => 'Le champ :attribute doit avoir entre :min and :max chifres.',
    'dimensions' => "Les dimensions de l'image sont invalides.",
    'distinct' => 'Le champ :attribute a une valeur déjà dupliquée.',
    'email' => "Ce champ doit être une adresse email valide",
    'ends_with' => "Ce champ doit finir par l'une de ces valeurs: :values.",
    'exists' => 'La valeur choisie est invalide.',
    'file' => 'Le champ :attribute doit être un fichier.',
    'filled' => 'Le champ :attribute doit posséder une valeur.',
    'gt' => [
        'numeric' => 'Lq vqleur de ce champ doit être supérieure à :value.',
        'file' => 'La taille du fichier doit être supérieure à :value kilobytes.',
        'string' => 'Le nombre de caractères de ce champ doit être supérieure à :value caractères.',
        'array' => 'Le champ :attribute doit comporter plus de  :value valeurs.',
    ],
    'gte' => [
        'numeric' => 'Le champ :attribute doit avoir une valeur supérieure ou égale à :value.',
        'file' => 'La taille de ce fichier doit être supérieure ou égale à :value kilobytes.',
        'string' => 'Le nombre de caractères de ce champ doit être supérieure ou égale à :value caractères.',
        'array' => 'Le champ :attribute doit comporter plus de  :value valeurs ou plus.',
    ],
    'image' => 'Le champ :attribute doit être une image.',
    'in' => 'La valeur sélectionnée est invalide.',
    'in_array' => "Cette valeur n'est pas présente dans :other.",
    'integer' => 'Le champ :attribute doit être un entier.',
    'ip' => 'Le champ :attribute doit être une adresse IP valide.',
    'ipv4' => 'Le champ :attribute doit être une adresse IPv4 valide.',
    'ipv6' => 'Le champ :attribute doit être une adresse IPv6 valide.',
    'json' => 'Le champ :attribute doit être du json valide.',
    'lt' => [
        'numeric' => 'Le champ :attribute doit avoir une valeur inférieure à :value.',
        'file' => 'La taille de ce fichier doit être inférieure à :value kilobytes.',
        'string' => 'Le nombre de caractères de ce champ doit être inférieure à :value caractères.',
        'array' => 'Le champ :attribute doit comporter moins de  :value valeurs .',
    ],
    'lte' => [
        'numeric' => 'Le champ :attribute doit avoir une valeur inférieure ou égale à :value.',
        'file' => 'La taille de ce fichier doit être inférieure ou égale à :value kilobytes.',
        'string' => 'Le nombre de caractères de ce champ doit être inférieure ou égale à :value caractères.',
        'array' => 'Le champ :attribute ne doit pas comporter plus de :value valeurs .',
    ],
    'max' => [
        'numeric' => 'Le champ :attribute ne peut pas avoir  une valeur supérieure à la valeure maximale de :max.',
        'file' => "La taille de ce fichier ne peut pas être supérieure  à la valeur maximale de :max kilobytes",
        'string' => 'Le nombre de caractères de ce champ ne peut pas être supérieur au nombre de caractères maximale qui est de :max characters.',
        'array' => 'Le champ :attribute ne peut pas comporter plus de :max valeurs.',
    ],
    'mimes' => 'Le champ :attribute doit être un fichier de type: :values.',
    'mimetypes' => 'Le champ :attribute doit être un fichier de type: :values.',
    'min' => [
        'numeric' => 'La valeur de ce champ doit être au minimum :min.',
        'file' => 'La taille de ce fichier doit être au minimum :min kilobytes.',
        'string' => 'Le nombre de caractère de ce champ doit être au minimum :min caractères.',
        'array' => 'Le champ :attribute doit avoir au minimum :min valeurs.',
    ],
    'not_in' => "La valeur sélectionnée n'est pas valide.",
    'not_regex' => 'Le format du champ est invalide.',
    'numeric' => 'Le cha,p doit être un nombre.',
    'password' => 'Le mot de passe est incorrecte.',
    'present' => 'Le champ :attribute :attribute doit être présent.',
    'regex' => 'Le format du champ est invalide.',
    'required' => 'Le champ :attribute est requis.',
    'required_if' => 'Le champ :attribute est requis si la valeur de  :other est :value.',
    'required_unless' => 'Le champ :attribute est requis à moins que :other est entre :values.',
    'required_with' => 'Le champ :attribute est requis lorsque en présence de :values .',
    'required_with_all' => 'Le champ :attribute est requis lorsque les valeurs :values sont présentes.',
    'required_without' => 'Le champ :attribute est requis en absence de :values .',
    'required_without_all' => 'Le champ :attribute est requis lorsque aucune de ces valeurs :values ne sont présentes.',
    'same' => ':attribute et :other doivent avoir la même valeur.',
    'size' => [
        'numeric' => 'Le champ :attribute doit avoir une taille de  :size.',
        'file' => 'Le fichier doit avoir une taille de  :size kilobytes.',
        'string' => 'Le champ :attribute doit être une chaîne de  :size caractères.',
        'array' => 'Le champ :attribute doit comporter exactement :size éléments.',
    ],
    'starts_with' => 'Le champ :attribute doit commencer avec une de ces valeurs: :values.',
    'string' => 'Le champ :attribute doit être une chaine de caractères.',
    'timezone' => 'Le champ :attribute doit être de type timezone valide.',
    'unique' => 'Cette valeur du champ :attribute existe déjà.',
    'uploaded' => "L'upload n'a pas réussi",
    'url' => 'Le champ :attribute doit être une URL valide.',
    'uuid' => 'Le champ :attribute doit être un UUID valide.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [
        "username"=>"nom d'utilisateur",
        "firstname"=>"prénoms",
        "lastname"=>"nom de famille",
        "password"=>"mot de passe",
        "email"=>"adresse email",
        "policy"=>"politique de confidentialité",
        "name"=>"nom",
        "services"=>"type de projet"
    ],
];
