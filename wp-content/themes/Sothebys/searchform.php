<div class="container">
    <div class="drp_filter" id="dropdown_filter">
        <ul class="btn_filter multistep_drp">
            <li class="mobile_show">
                <select name="region" id="region" class="bttn white mob_none btn_select">
                    <option class="options" value="volvo">Kaufen</option>
                    <option value="mieten" class="slector-item">Mieten</option>
                </select>
            </li>
            <li class="mob_display_none full_cb">
                <label for="kaufen_1">Kaufen</label>
                <input type="checkbox" id="kaufen_1" name="" value="" class="bttn white">
            </li>
            <li class="mob_display_none full_cb">
                <label for="mieten_1">Mieten</label>
                <input type="checkbox" id="mieten_1" name="" value="" class="bttn white">
            </li>
            <li>
                <select name="region" id="region" class="bttn white mob_none btn_select">
                    <option class="options" value="volvo" class="slector-item">Stadtteil/Bezirk</option>
                    <option value="saab" class="slector-item">Saab</option>
                    <option value="opel" class="slector-item">Opel</option>
                    <option value="audi" class="slector-item">Audi</option>
                </select>
            </li>
            <li>
                <select name="region" id="region" class="bttn white mob_none btn_select">
                    <option value="volvo" class="slector-item">Region</option>
                    <option value="saab" class="slector-item">Saab</option>
                    <option value="opel" class="slector-item">Opel</option>
                    <option value="audi" class="slector-item">Audi</option>
                </select>
            </li>
        </ul>
        <ul class="filter_ul">
            <li>
                <div class="r_cnt">
                    <div class="form-group">
                        <label class="range_label">Preis in € von bis</label>
                        <div class="range_slider">
                            <div class="slider_track">
                            </div>
                            <div class="multi_range">
                                <input type="range" min="500" max="5000000" value="1" class="slider-1">
                                <input type="range" min="500" max="5000000" value="5000000" class="slider-2">
                            </div>
                        </div>
                        <div class="range_values">
                            <span class="range_1">0</span>
                            <span class="km_range">
                                <span class="r_wrap"><span>>&nbsp;</span></span>
                                <span class="range_2">5.000.000</span>
                            </span>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="r_cnt">
                    <div class="form-group">
                        <label class="range_label">Wohnfläche in m²</label>
                        <div class="range_slider">
                            <div class="slider_track">
                            </div>
                            <div class="multi_range">
                                <input type="range" min="2" max="2500000" value="1" class="slider-1">
                                <input type="range" min="2" max="2500000" value="2500000" class="slider-2">
                            </div>
                        </div>
                        <div class="range_values">
                            <span class="range_1">0</span>
                            <span class="km_range">
                                <span class="r_wrap">
                                    <span>>&nbsp;</span>
                                    <span class="range_2"> 25.00.000</span>
                                </span>
                            </span>

                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="r_cnt">
                    <div class="form-group">
                        <label class="range_label">Zimmeranzahl</label>
                        <div class="range_slider">
                            <div class="slider_track">
                            </div>
                            <div class="multi_range">
                                <input type="range" min="50" max="100" value="1" class="slider-1">
                                <input type="range" min="50" max="100" value="100" class="slider-2">
                            </div>
                        </div>
                        <div class="range_values">
                            <span class="range_1">0</span>
                            <span class="r_wrap">
                                <span>>&nbsp;</span>
                                <span class="range_2">100</span>
                            </span>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="r_cnt">
                    <div class="form-group">
                        <label class="range_label">Umkreis</label>
                        <div class="range_slider">
                            <div class="slider_track">
                            </div>
                            <div class="multi_range">
                                <input type="range" min="30" max="75" value="1" class="slider-1">
                                <input type="range" min="30" max="75" value="75" class="slider-2">
                            </div>
                        </div>
                        <div class="range_values">
                            <span class="range_1">0</span>
                            <span class="r_wrap">
                                <span class="range_2">75</span>
                                <span>&nbsp; km</span>
                            </span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="range_sub_head mob_block">
            <h5>Weitere Optionen</h5>
        </div>

        <ul class="filter_check_ul">
            <li>
                <div class="form-group">
                    <div class="inp-box off-21">
                        <div class="checkbox filter">
                            <label>
                                <input type="checkbox" name="cbox" required="" aria-required="true">
                            </label>
                            <span class="check range_ch">Stellplatz </span>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <div class="inp-box off-21">
                        <div class="checkbox filter">
                            <label>
                                <input type="checkbox" name="cbox" required="" aria-required="true">
                            </label>
                            <span class="check range_ch">Einbauküche </span>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <div class="inp-box off-21">
                        <div class="checkbox filter">
                            <label>
                                <input type="checkbox" name="cbox" required="" aria-required="true">
                            </label>
                            <span class="check range_ch">Balkon/Terrasse  </span>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <div class="inp-box off-21">
                        <div class="checkbox filter">
                            <label>
                                <input type="checkbox" name="cbox" required="" aria-required="true">
                            </label>
                            <span class="check range_ch">Personenaufzug</span>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <div class="inp-box off-21">
                        <div class="checkbox filter">
                            <label>
                                <input type="checkbox" name="cbox" required="" aria-required="true">
                            </label>
                            <span class="check range_ch">Gäste WC</span>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <div class="inp-box off-21">
                        <div class="checkbox filter">
                            <label>
                                <input type="checkbox" name="cbox" required="" aria-required="true">
                            </label>
                            <span class="check range_ch">Gartennutzung</span>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <div class="inp-box off-21">
                        <div class="checkbox filter">
                            <label>
                                <input type="checkbox" name="cbox" required="" aria-required="true">
                            </label>
                            <span class="check range_ch">Barrierefrei</span>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="form-group">
                    <div class="inp-box off-21">
                        <div class="checkbox filter">
                            <label>
                                <input type="checkbox" name="cbox" required="" aria-required="true">
                            </label>
                            <span class="check range_ch">Keller</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="fullw_undline lft_to_rgt range_undline"></div>
        <div class="close_btn " id="cls">
            <button> zurücksetzten</button>
        </div>
        <ul class="btn_filter">
            <li class="search_btn">
                <button class="bttn white">Suchen</button>
            </li>
        </ul>
    </div>
</div>