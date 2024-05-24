from django import template
from utils.load_json import json_data

register = template.Library()


@register.filter(name='mix')
def mix(key):
    return '/static' + json_data.get(key, "")
