// Copyright 2017 The Kubernetes Dashboard Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import helpSectionDirective from './helpsection_directive';
import userHelpDirective from './userhelp_directive';

/**
 * Angular module for a reusable section with user help and a preset layout.
 *
 */
export default angular.module('kubernetesDashboard.helpsection', [])
    .directive('kdHelpSection', helpSectionDirective)
    .directive('kdUserHelp', userHelpDirective);
