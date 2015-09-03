/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name fileApp.directive:scale
 * @description
 * # scale
 */
angular.module('fileApp')
    .directive('scale', function() {
        return {
            restrict: 'A',
            link: function() {
                $(document).ready(function() {
                	$('.menu-item').click(function(){
                		$('.circle-background circle.circle-object').click();
                		var colors = $(this).attr('id');
                		console.log(colors);
                		switch (colors) {
                			case 'aboutBG':
                				$('circle.circle-object').attr('fill','#03a9f4');
                				break;
                			case 'skillsBG':
                				$('circle.circle-object').attr('fill','#009688');
                				break;
                			case 'webBG':
                				$('circle.circle-object').attr('fill','#4CAF50');
                				break;
                			case 'graphicsBG':
                				$('circle.circle-object').attr('fill','#cddc39');
                				break;
                			case 'contactBG':
                				$('circle.circle-object').attr('fill','#ffc107');
                				break;
                			case 'socialBG':
                				$('circle.circle-object').attr('fill','#ff9800');
                				break;
                			default:
                				$('circle.circle-object').attr('fill','#ec407a');
                				break;
                		}

                	});
                	$('.menu-open-button').click(function(){
                		$('.circle-background circle.circle-object').attr('r','1');
                		$('circle.circle-object').attr('fill','#ec407a');
                	});
                });
            }
        };
    });
